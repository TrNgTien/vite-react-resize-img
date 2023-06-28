declare const imageConfigDefault: {
    deviceSizes: number[];
    imageSizes: number[];
    path: string;
    format: string;
};
declare const reactImgGen: () => {
    name: string;
    transform(code: any, id: any): Promise<{
        code: any;
    } | undefined>;
};

export { reactImgGen as default, imageConfigDefault };
