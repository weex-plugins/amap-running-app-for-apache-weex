//
//  WXMapViewModule.m
//  Pods
//
//  Created by yangshengtao on 17/1/23.
//
//

#import "WXMapViewModule.h"
#import "WXMapViewComponent.h"
#import "WXConvert+AMapKit.h"

@implementation WXMapViewModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(getUserLocation:callback:))
WX_EXPORT_METHOD(@selector(getLineDistance:marker:callback:))
WX_EXPORT_METHOD_SYNC(@selector(polygonContainsMarker:ref:callback:))

- (void)getUserLocation:(NSString *)elemRef callback:(WXModuleCallback)callback
{
    [self performBlockWithRef:elemRef block:^(WXComponent *component) {
        callback([(WXMapViewComponent *)component getUserLocation] ? : nil);
    }];
}

- (void)getLineDistance:(NSArray *)marker marker:(NSArray *)anotherMarker callback:(WXModuleCallback)callback
{
    CLLocationCoordinate2D location1 = [WXConvert CLLocationCoordinate2D:marker];
    CLLocationCoordinate2D location2 = [WXConvert CLLocationCoordinate2D:anotherMarker];
    MAMapPoint p1 = MAMapPointForCoordinate(location1);
    MAMapPoint p2 = MAMapPointForCoordinate(location2);
    CLLocationDistance distance =  MAMetersBetweenMapPoints(p1, p2);
    NSDictionary *userDic;
    if (distance > 0) {
        userDic = @{@"result":@"success",@"data":@{@"distance":[NSNumber numberWithDouble:distance]}};
    }else {
        userDic = @{@"resuldt":@"false",@"data":@""};
    }
    callback(userDic);
}

- (void)polygonContainsMarker:(NSArray *)position ref:(NSString *)elemRef callback:(WXModuleCallback)callback
{
    [self performBlockWithRef:elemRef block:^(WXComponent *WXMapRenderer) {
        CLLocationCoordinate2D loc1 = [WXConvert CLLocationCoordinate2D:position];
        MAMapPoint p1 = MAMapPointForCoordinate(loc1);
        NSDictionary *userDic;

        if (![WXMapRenderer.shape isKindOfClass:[MAMultiPoint class]]) {
            userDic = @{@"result":@"false",@"data":[NSNumber numberWithBool:NO]};
            return;
        }
        MAMapPoint *points = ((MAMultiPoint *)WXMapRenderer.shape).points;
        NSUInteger pointCount = ((MAMultiPoint *)WXMapRenderer.shape).pointCount;
        
        if(MAPolygonContainsPoint(p1, points, pointCount)) {
             userDic = @{@"result":@"success",@"data":[NSNumber numberWithBool:YES]};
        } else {
            userDic = @{@"result":@"false",@"data":[NSNumber numberWithBool:NO]};
        }
        callback(userDic);
    }];
}

- (void)performBlockWithRef:(NSString *)elemRef block:(void (^)(WXComponent *))block {
    if (!elemRef) {
        return;
    }
    
    __weak typeof(self) weakSelf = self;
    
    WXPerformBlockOnComponentThread(^{
        WXComponent *component = (WXComponent *)[weakSelf.weexInstance componentForRef:elemRef];
        if (!component) {
            return;
        }
        
        [weakSelf performSelectorOnMainThread:@selector(doBlock:) withObject:^() {
            block(component);
        } waitUntilDone:NO];
    });
}

- (void)doBlock:(void (^)())block {
    block();
}
@end
