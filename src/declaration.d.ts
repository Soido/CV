declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: any;
  export = value;
}
