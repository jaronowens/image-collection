const getFile = async () => {

    let fileHandle;
    const reader = new FileReader();

    [fileHandle] = await window.showOpenFilePicker();
    const fileData = await fileHandle.getFile();
    reader.readAsDataURL(fileData);
    return (reader.result);
};

export { getFile };