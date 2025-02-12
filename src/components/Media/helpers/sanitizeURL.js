const sanitizeURL = (url) => {
    return url
    .replaceAll('(', '%28')
    .replaceAll(')', '%29')
    .replaceAll(' ', '%20')
}

export { sanitizeURL };