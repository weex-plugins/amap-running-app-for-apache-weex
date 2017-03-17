//
//  WXMapInfoWindowComponent.m
//  Pods
//
//  Created by yangshengtao on 17/3/7.
//
//

#import "WXMapInfoWindowComponent.h"
#import "WXMapViewComponent.h"
#import "WXMapInfoWindow.h"

@implementation WXMapInfoWindowComponent
@synthesize annotation = _annotation;
@synthesize identifier = _identifier;

@synthesize isOpen = _isOpen;

- (instancetype)initWithRef:(NSString *)ref
                       type:(NSString*)type
                     styles:(nullable NSDictionary *)styles
                 attributes:(nullable NSDictionary *)attributes
                     events:(nullable NSArray *)events
               weexInstance:(WXSDKInstance *)weexInstance
{
    self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance];
    if (self) {
        if (attributes[@"open"]) {
            _isOpen = [attributes[@"open"] boolValue];
        }
        
    }
    return self;
}

- (UIView *) loadView
{
    return [[WXMapInfoWindow alloc] initWithAnnotation:_annotation reuseIdentifier:_identifier];
}

- (void)insertSubview:(WXComponent *)subcomponent atIndex:(NSInteger)index{}
- (void)updateAttributes:(NSDictionary *)attributes
{
    if (attributes[@"open"])
    {
        _isOpen = [attributes[@"open"] boolValue];
        if (_isOpen) {
            [self _addSubView];
        }else {
            [self _removeViewFromSuperView];
        }
    }
}

#pragma mark - private method
- (void)_addSubView
{
    [self _removeViewFromSuperView];
    [(WXMapViewComponent *)self.supercomponent addMarker:self];
}

- (void)_removeViewFromSuperView
{
    [(WXMapViewComponent *)self.supercomponent removeMarker:self];
}

@end
