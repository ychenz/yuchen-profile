declare module 'TagCloud'; // Required for TagCloud lib to work with Typescript

// The following allows import of *.svg in any ts files
declare module "*.svg" {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}
