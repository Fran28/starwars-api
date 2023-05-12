export const getUrlLastPart = (url: string) => {
    const urlParts = url.split("/");
    return Number(urlParts[5]);
}