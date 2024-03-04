const reg=["0","23BCE10535","23BCE10496","23BCE11633","23BSA10021","23BAI10548","23BAI11182","23BCE11780","23bai10916","23BCE11252","23BCE10303","22BME10002","21BCY10076","21BCY10175","21BCE11687","23BAI10831","23BAI10855","23BCY10080","23BAI10457","23BCY10291","23BCY10141","21BCE10221","23BAI01546","23BAI11377","22BCE11178","23BCE10974","23BAI11212","21BAI10251","23BSA10035","23BAI10593","23BAI11224","23BCE11649","23BAI10929","23BAI10933","23BCE10500","23BCE11356","23BCE10688","23BCE10361","23BHI10075","23BCE11016","23BAI10010","23BCE11418","23BAI10165","23BCE10131","23BCE10510","23BAI10065","23BCE10416","23BAI10262","23BCE10542","23BCE11586","23BAI10847","23BAI10383","23BAI11218","23BCY10085","23BAI11039","23BAI10095","23BAI11278","23BAI11003","23BCE11465","23BAI11052","23BCE11605","23BCE11528","23BAI11130","23BCY10307","23BSA10164","23BAI11261","23BAI10722","23BCE10248","23BAI10878","23BAI10247","23BAI10585","23BCE10178","23BAI10550","23BAI10572","23BCE11233","23BCE11203","23BCE11231","23BAI10603","23BEC10003","22BHI10187","22BSA10184","22BCE11395","22BCE10470","23BCE10847","23BCE10425","23BCE10472","23BSA10008","23BCE10448","23BCE10331","23BAI10038","23BCE10437","21BAI10085","22BCE10212","22BAC10036","23BCE10409","21","21BCE11176","22BAC10022","22MIM10099","23","23BCE10477"];
let detail=document.querySelector(".Details");
let btn=document.querySelector("#submit");
let certi=document.querySelector(".certi");
let download=document.querySelector(".download");
let c=-1;
detail.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13){
    var reg_no=document.getElementById("reg-no").value;
    get(reg_no);
    }
});
const get=(reg_no)=>{
    for(i=0;i<reg.length;i++){
        if(`${reg_no}`.toUpperCase()==reg[i]){
            var img=document.getElementById("image");
            certi.classList.remove("hide")
            download.classList.remove("hide")
            img.src=`Certificate/${i}.png`;
            download.href=`Certificate/${i}.png`;
            c=i;
        }
    }
    c=-1;
}
btn.addEventListener("click",()=>{
    var reg_no=document.getElementById("reg-no").value;
    get(reg_no);
});