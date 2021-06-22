declare namespace LayoutModuleCssNamespace {
  export interface ILayoutModuleCss {
    'layout-root': string;
    'login-btn': string;
    'under-toolbar': string;
  }
}

declare const LayoutModuleCssModule: LayoutModuleCssNamespace.ILayoutModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LayoutModuleCssNamespace.ILayoutModuleCss;
};

export = LayoutModuleCssModule;
