const fileinput=document.querySelector("input"),
downloadbtn=document.querySelector("button");
downloadbtn.addEventListener("click", e=>{
    e.preventDefault();
    downloadbtn.innerText ="Downloading File....";
    fetchFile(fileinput.value);
});
function fetchFile(url){
    fetch(url).then(res=>res.blob()).then(file=>{
        let tempUrl=URL.createObjectURL(file);
        let aTag=document.createElement("a");
        aTag.href=tempUrl;
        aTag.download= "filename";

        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        // console.log(tempUrl);
        URL.revokeObjectURL(tempUrl);
        downloadbtn.innerText ="Download File";
    }).catch(()=>{
        downloadbtn.innerText ="Download File";
        alert("Failed to download file");
    });
}