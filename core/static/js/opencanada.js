var breakpoint = 985;
var collapsedHeader = false;

jQuery(document).ready(function() {

    initForWindow();
    
    FeatureStyles.Camera.initialize();
    FeatureStyles.Arrow.initialize();
    FeatureStyles.FeatureImages.initialize();
    FeatureStyles.ImageFeature.initialize();
    FeatureStyles.RelatedArticles.initialize();
    FeatureStyles.EndNotes.initialize();

    Search.Structure.initialize();

    Sharing.Links.initialize();

    Menu.initialize();
    
});

//initialize window based on width and height
function initForWindow(){

    Header.Structure.toggleHeading();
    Header.Positioning.updateHeaderPositioning();
    FeatureStyles.MainFeatures.initializeForWindow();
    Sharing.Links.initializeForWindow();
    

    $("main, .main-feature").click(function (e) {
        if (Menu.isOpen() || Search.Structure.isOpen()){
            e.preventDefault();
        }
        Menu.close();
        Search.Structure.closeBox();
        FeatureStyles.MainFeatures.removeNavigationLock();
    });
}

$(window).resize(function(){
    initForWindow();
    Menu.noAnimation();
});

$(window).scroll(function(){
    Header.Structure.toggleHeading();
    Header.Positioning.updateHeaderPositioning();
});



