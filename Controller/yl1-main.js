/**
 * Created by The Dog on 30.05.2017.
 */
// lehekülje laadimisel genereeritakse suvalised väärtused skeemile ja lähtestatakse algskeem. Kaotatakse ka järgmiste etappide vastused
window.onload = function autom() {

    $.getScript('../Controller/yl1-values.js',function () {
        genereeri();
    });

    $.getScript('VisualControl/yl1-schema.js',function () {
        yl10();
    });
    $.getScript('VisualControl/yl1-schema.js',function () {
        vaartused();
    });
};








