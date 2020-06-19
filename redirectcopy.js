function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='https://www.facebook.com/Nh%C3%A0-%C4%90%E1%BA%A5t-UY-T%C3%8DN-Nh%E1%BA%A5t-M%E1%BB%8Di-Th%E1%BB%9Di-%C4%90%E1%BA%A1i-111330600577203'>https://www.facebook.com/Nh%C3%A0-%C4%90%E1%BA%A5t-UY-T%C3%8DN-Nh%E1%BA%A5t-M%E1%BB%8Di-Th%E1%BB%9Di-%C4%90%E1%BA%A1i-111330600577203http://https://www.facebook.com/Nh%C3%A0-%C4%90%E1%BA%A5t-UY-T%C3%8DN-Nh%E1%BA%A5t-M%E1%BB%8Di-Th%E1%BB%9Di-%C4%90%E1%BA%A1i-111330600577203</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
