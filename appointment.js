const reg=["0","23BCE10409","23BAI10486","23BAI10572","23BAI10847","23BSA10008","23BCE10425","23BCE10472","23BCE10448","23BCE10331","22BCE10177","23BAI10038","23BAI10904","23BAI10383","23BCY10085","23BCE11203","23BCE10422","23BAI10916","23BAS10082","23BCE10169","23BCE11233","23BCE10963","23BME10027","23BCE10514","23BCE10271","23BET10038","23BCE10462","23BCE10655","23BCE11144","23BAI10048","23BAI10321","23BAI10546","23BAI10766","23BAI10831","23BAI10993","23BAI11168","23BAI11174","23BAI11218","23MEI10090","23BCE10361","23BCE11026","23BCE11536","23BAC10036","23BCE10404","23BHI10177","23BSA10080","23BCE10110","23BCE10143","23BCE10134","23MIM10012","23BCE10334"];
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
            img.src=`Appointment/${i}.png`;
            download.href=`Appointment/${i}.png`;
            c=i;
        }
    }
    c=-1;
}
btn.addEventListener("click",()=>{
    var reg_no=document.getElementById("reg-no").value;
    get(reg_no);
});