package com.alibaba.weex.amap.component;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.text.TextUtils;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Toast;

import com.alibaba.weex.amap.util.Constant;
import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.amap.api.maps.AMap;
import com.amap.api.maps.CameraUpdateFactory;
import com.amap.api.maps.LocationSource;
import com.amap.api.maps.MapView;
import com.amap.api.maps.MapsInitializer;
import com.amap.api.maps.UiSettings;
import com.amap.api.maps.model.CameraPosition;
import com.amap.api.maps.model.LatLng;
import com.amap.api.maps.model.Marker;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.utils.WXLogUtils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

public class WXMapViewComponent extends WXVContainer<MapView> implements LocationSource,
    AMapLocationListener {
  private static final int REQUEST_CODE_MAPVIEW = 10000001;
  private static String[] permissions = new String[]{
      "android.permission.ACCESS_FINE_LOCATION",
      "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"
  };
  private MapView mMapView;
  private AMap mAMap;
  private UiSettings mUiSettings;
  private Activity mActivity;

  private boolean isScaleEnable = true;
  private boolean isZoomEnable = true;
  private boolean isCompassEnable = true;
  private boolean isMyLocationEnable = false;
  private float mZoomLevel;
  private int mGesture = 0xF;
  private boolean isIndoorSwitchEnable = false;
  private OnLocationChangedListener mLocationChangedListener;
  private AMapLocationClient mLocationClient;
  private AMapLocationClientOption mLocationOption;
  private HashMap<String, WXMapInfoWindowComponent> mInfoWindowHashMap = new HashMap<>();

  public WXMapViewComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
    super(instance, dom, parent, isLazy);
  }

  @Override
  protected MapView initComponentHostView(@NonNull Context context) {
    mMapView = new MapView(context);
    mMapView.onCreate(null);
    if (context instanceof Activity) {
      mActivity = (Activity) context;
    }
    initMap();
    return mMapView;
  }

  private void initMap() {
    if (mAMap == null) {
      mAMap = mMapView.getMap();

      mAMap.setInfoWindowAdapter(new InfoWindowAdapter(this));
      mAMap.setOnMapLoadedListener(new AMap.OnMapLoadedListener() {
        @Override
        public void onMapLoaded() {
          mZoomLevel = mAMap.getCameraPosition().zoom;
        }
      });

      // 绑定 Marker 被点击事件
      mAMap.setOnMarkerClickListener(new AMap.OnMarkerClickListener() {
        // marker 对象被点击时回调的接口
        // 返回 true 则表示接口已响应事件，否则返回false
        @Override
        public boolean onMarkerClick(Marker marker) {

          if (marker != null) {
            for (int i = 0; i < getChildCount(); i++) {
              if (getChild(i) instanceof WXMapMarkerComponent) {
                WXMapMarkerComponent child = (WXMapMarkerComponent) getChild(i);
                if (child.getMarker() != null && child.getMarker().getId() == marker.getId()) {
                  child.onClick();
                }
              }
            }
          }
          return false;
        }
      });
      mAMap.setOnCameraChangeListener(new AMap.OnCameraChangeListener() {

        private boolean mZoomChanged;

        @Override
        public void onCameraChange(CameraPosition cameraPosition) {
          mZoomChanged = mZoomLevel != cameraPosition.zoom;
          mZoomLevel = cameraPosition.zoom;
        }

        @Override
        public void onCameraChangeFinish(CameraPosition cameraPosition) {
          if (mZoomChanged) {
            getInstance().fireEvent(getRef(), Constant.EVENT.ZOOM_CHANGE);
          }
        }
      });

      mAMap.setOnMapTouchListener(new AMap.OnMapTouchListener() {
        boolean dragged = false;

        @Override
        public void onTouch(MotionEvent motionEvent) {

          switch (motionEvent.getAction()) {
            case MotionEvent.ACTION_MOVE:
              dragged = true;
              break;
            case MotionEvent.ACTION_UP:
              if (dragged) getInstance().fireEvent(getRef(), Constant.EVENT.DRAG_CHANGE);
              dragged = false;
              break;
          }
        }
      });
      setUpMap();
    }
  }

  private void setUpMap() {
    mUiSettings = mAMap.getUiSettings();

    mUiSettings.setScaleControlsEnabled(isScaleEnable);
    mUiSettings.setZoomControlsEnabled(isZoomEnable);
    mUiSettings.setCompassEnabled(isCompassEnable);
    mUiSettings.setIndoorSwitchEnabled(isIndoorSwitchEnable);
    if (checkPermissions(mActivity, permissions)) {
      setMyLocationStatus(isMyLocationEnable);
    }
    updateGestureSetting();

  }

  private void updateGestureSetting() {
    if ((mGesture & 0xF) == 0xF) {
      mUiSettings.setAllGesturesEnabled(true);
    } else {
      if ((mGesture & Constant.Value.SCROLLGESTURE) == Constant.Value.SCROLLGESTURE) {
        mUiSettings.setScrollGesturesEnabled(true);
      } else {
        mUiSettings.setScrollGesturesEnabled(false);
      }

      if ((mGesture & Constant.Value.ZOOMGESTURE) == Constant.Value.ZOOMGESTURE) {
        mUiSettings.setZoomGesturesEnabled(true);
      } else {
        mUiSettings.setZoomGesturesEnabled(false);
      }

      if ((mGesture & Constant.Value.TILTGESTURE) == Constant.Value.TILTGESTURE) {
        mUiSettings.setTiltGesturesEnabled(true);
      } else {
        mUiSettings.setTiltGesturesEnabled(false);
      }

      if ((mGesture & Constant.Value.ROTATEGESTURE) == Constant.Value.ROTATEGESTURE) {
        mUiSettings.setRotateGesturesEnabled(true);
      } else {
        mUiSettings.setRotateGesturesEnabled(false);
      }
    }
  }

  @JSMethod
  public void setMyLocationButtonEnabled(boolean enabled) {

    if (mUiSettings != null) {
      mUiSettings.setMyLocationButtonEnabled(enabled);

    }
  }

  @Override
  public void onActivityCreate() {
    super.onActivityCreate();
  }

  @Override
  public void onActivityPause() {
    mMapView.onPause();
    deactivate();
  }

  @Override
  public void onActivityResume() {
    mMapView.onResume();
  }

  private boolean requestPermissions() {
    boolean granted = true;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      granted = false;
      if (mActivity != null) {
        if (!checkPermissions(mActivity, permissions)) {
          ActivityCompat.requestPermissions(mActivity, permissions, REQUEST_CODE_MAPVIEW);
        } else {
          granted = true;
        }
      }
    }
    return granted;
  }

  @Override
  public void onActivityDestroy() {
    mMapView.onDestroy();
    if (mLocationClient != null) {
      mLocationClient.onDestroy();
    }
  }

  @WXComponentProp(name = Constant.Name.KEYS)
  public void setApiKey(String keys) {
    try {
      JSONObject object = new JSONObject(keys);
      String key = object.optString("android");
      if (!TextUtils.isEmpty(key)) {
        MapsInitializer.setApiKey(key);
        AMapLocationClient.setApiKey(key);
        //ServiceSettings.getInstance().setApiKey(key);
      }
    } catch (JSONException e) {
      e.printStackTrace();
    }

  }

  @WXComponentProp(name = Constant.Name.SCALECONTROL)
  public void setScaleEnable(boolean scaleEnable) {
    this.isScaleEnable = scaleEnable;
    mUiSettings.setScaleControlsEnabled(scaleEnable);
  }

  @WXComponentProp(name = Constant.Name.ZOOM_ENABLE)
  public void setZoomEnable(boolean zoomEnable) {
    this.isZoomEnable = zoomEnable;
    mUiSettings.setZoomControlsEnabled(zoomEnable);
  }

  @WXComponentProp(name = Constant.Name.ZOOM)
  public void setZoom(int level) {
    mAMap.moveCamera(CameraUpdateFactory.zoomTo(level));
  }

  @WXComponentProp(name = Constant.Name.COMPASS)
  public void setCompass(boolean compass) {
    this.isCompassEnable = compass;
    mUiSettings.setCompassEnabled(compass);
  }

  @WXComponentProp(name = Constant.Name.GEOLOCATION)
  public void setMyLocationEnable(boolean myLocationEnable) {
    this.isMyLocationEnable = myLocationEnable;
    if (requestPermissions()) {
      setMyLocationStatus(myLocationEnable);
    }
  }

//  @WXComponentProp(name = Constant.Name.MARKER)
//  public void setMarker(String markers) {
//    try {
//      JSONArray jsonArray = new JSONArray(markers);
//      for (int i = 0; i < jsonArray.length(); i++) {
//        JSONObject jsonObject = jsonArray.optJSONObject(i);
//        if (jsonObject != null) {
//          JSONArray position = jsonObject.optJSONArray("position");
//          String title = jsonObject.optString("title");
//          String icon = jsonObject.optString("icon");
//          if (position != null) {
//            LatLng latLng = new LatLng(position.optDouble(1), position.optDouble(0));
//            final MarkerOptions markerOptions = new MarkerOptions();
//            //设置Marker可拖动
//            markerOptions.draggable(true);
//            // 将Marker设置为贴地显示，可以双指下拉地图查看效果
//            markerOptions.setFlat(true);
//            if (latLng != null) {
//              markerOptions.position(latLng);
//            }
//            if (!TextUtils.isEmpty(title)) {
//              markerOptions.title(title);
//            }
//            if (!TextUtils.isEmpty(icon)) {
//              IWXImgLoaderAdapter adapter = WXSDKManager.getInstance().getIWXImgLoaderAdapter();
//              ImageView imageView = new ImageView(getContext());
//              imageView.setLayoutParams(new ViewGroup.LayoutParams(1, 1));
//              imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
//              if (adapter != null) {
//                WXImageStrategy wxImageStrategy = new WXImageStrategy();
//                wxImageStrategy.setImageListener(new WXImageStrategy.ImageListener() {
//                  @Override
//                  public void onImageFinish(String url, ImageView imageView, boolean result, Map extra) {
//                    imageView.setLayoutParams(
//                        new ViewGroup.LayoutParams(
//                            ViewGroup.LayoutParams.WRAP_CONTENT,
//                            ViewGroup.LayoutParams.WRAP_CONTENT));
//                    markerOptions.icon(BitmapDescriptorFactory.fromView(imageView));
//                    mAMap.addMarker(markerOptions);
//                  }
//                });
//                wxImageStrategy.placeHolder = icon;
//                adapter.setImage(icon, imageView, WXImageQuality.NORMAL, wxImageStrategy);
//
//              }
//            } else {
//              mAMap.addMarker(markerOptions);
//            }
//          }
//        }
//      }
//    } catch (JSONException e) {
//      e.printStackTrace();
//    }
//  }

  @WXComponentProp(name = Constant.Name.CENTER)
  public void setCenter(String location) {
    try {
      JSONArray jsonArray = new JSONArray(location);
      LatLng latLng = new LatLng(jsonArray.optDouble(1), jsonArray.optDouble(0));
      mAMap.moveCamera(CameraUpdateFactory.changeLatLng(latLng));
    } catch (JSONException e) {
      e.printStackTrace();
    }
  }

  @WXComponentProp(name = Constant.Name.GESTURE)
  public void setGesture(int gesture) {
    this.mGesture = gesture;
    updateGestureSetting();
  }

  @WXComponentProp(name = Constant.Name.INDOORSWITCH)
  public void setIndoorSwitchEnable(boolean indoorSwitchEnable) {
    this.isIndoorSwitchEnable = indoorSwitchEnable;
    mUiSettings.setIndoorSwitchEnabled(indoorSwitchEnable);
  }

  public void setMyLocationStatus(boolean isActive) {

    if (isActive) {
      mAMap.setLocationSource(this);// 设置定位监听
      mUiSettings.setMyLocationButtonEnabled(true && checkPermissions(mActivity, permissions));// 设置默认定位按钮是否显示
      mAMap.setMyLocationEnabled(true);// 设置为true表示显示定位层并可触发定位，false表示隐藏定位层并不可触发定位，默认是false
      // 设置定位的类型为定位模式 ，可以由定位、跟随或地图根据面向方向旋转几种
      mAMap.setMyLocationType(AMap.LOCATION_TYPE_LOCATE);
    } else {
      deactivate();
      mAMap.setLocationSource(null);
      mAMap.setMyLocationEnabled(false);
      mUiSettings.setMyLocationButtonEnabled(false);
    }
  }

  @Override
  public void activate(OnLocationChangedListener listener) {
    mLocationChangedListener = listener;
    if (mLocationClient == null) {
      mLocationClient = new AMapLocationClient(getContext());
      mLocationOption = new AMapLocationClientOption();
      //设置定位监听
      mLocationClient.setLocationListener(this);
      //设置为高精度定位模式
      mLocationOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);
      //设置定位参数
      mLocationClient.setLocationOption(mLocationOption);
      // 此方法为每隔固定时间会发起一次定位请求，为了减少电量消耗或网络流量消耗，
      // 注意设置合适的定位时间的间隔（最小间隔支持为2000ms），并且在合适时间调用stopLocation()方法来取消定位请求
      // 在定位结束后，在合适的生命周期调用onDestroy()方法
      // 在单次定位情况下，定位无论成功与否，都无需调用stopLocation()方法移除请求，定位sdk内部会移除
      mLocationClient.startLocation();
    }
  }

  @Override
  public void deactivate() {
    mLocationChangedListener = null;
    if (mLocationClient != null) {
      mLocationClient.stopLocation();
      mLocationClient.onDestroy();
    }
    mLocationClient = null;
  }

  @Override
  public void onLocationChanged(AMapLocation amapLocation) {
    if (mLocationChangedListener != null && amapLocation != null) {
      if (amapLocation != null
          && amapLocation.getErrorCode() == 0) {
        mLocationChangedListener.onLocationChanged(amapLocation);// 显示系统小蓝点
        // mAMap.moveCamera(CameraUpdateFactory.zoomTo(18));
      } else {
        String errText = "定位失败," + amapLocation.getErrorCode() + ": " + amapLocation.getErrorInfo();
        WXLogUtils.e("AmapErr", errText);
      }
    }
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    switch (requestCode) {
      case REQUEST_CODE_MAPVIEW:
        if (checkPermissions(mActivity, permissions) && isMyLocationEnable) {
          setMyLocationEnable(isMyLocationEnable);
        }
        break;
      default:
        break;
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }

  public boolean checkPermissions(Activity context, String[] permissions) {
    boolean granted = true;
    if (permissions != null && permissions.length > 0) {
      for (String permission : permissions) {
        if (ContextCompat.checkSelfPermission(context, permission) != PackageManager.PERMISSION_GRANTED) {
          granted = false;
          if (ActivityCompat.shouldShowRequestPermissionRationale(context, permission)) {
            Toast.makeText(context, "please give me the permissions", Toast.LENGTH_SHORT).show();
          }
        }
      }
    }

    return granted;
  }

  public HashMap<String, WXMapInfoWindowComponent> getCachedInfoWindow() {
    return mInfoWindowHashMap;
  }

  private static class InfoWindowAdapter implements AMap.InfoWindowAdapter {

    private WXMapViewComponent mWXMapViewComponent;

    InfoWindowAdapter(WXMapViewComponent wxMapViewComponent) {
      mWXMapViewComponent = wxMapViewComponent;
    }

    @Override
    public View getInfoWindow(Marker marker) {
      return render(marker);
    }

    @Override
    public View getInfoContents(Marker marker) {
      return render(marker);
    }

    private View render(Marker marker) {
      WXMapInfoWindowComponent wxMapInfoWindowComponent = mWXMapViewComponent.mInfoWindowHashMap.get(marker.getId());
      if (wxMapInfoWindowComponent != null) {
        mWXMapViewComponent.getHostView().removeView(wxMapInfoWindowComponent.getHostView());
        return wxMapInfoWindowComponent.getHostView();
      }
      return null;
    }
  }
}
