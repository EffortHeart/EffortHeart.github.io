$(document).ready(function(){
    var e = new ScrollMagic.Controller;
    new ScrollMagic
        .Scene({
            triggerElement:"#aboutPage",duration:"100%"
        })
        .setClassToggle("#about-headline","fade-in-headline")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skills-headline","fade-in-headline")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projects-headline","fade-in-headline")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#contactPage",duration:"100%"})
        .setClassToggle("#contact-headline","fade-in-headline")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .lines .top-line","fade-in-top")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .lines .bottom-line","fade-in-bottom")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skillsPage .lines .top-line","fade-in-top")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skillsPage .lines .bottom-line","fade-in-bottom")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .lines .top-line","fade-in-top")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .lines .bottom-line","fade-in-bottom")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#contactPage",duration:"100%"})
        .setClassToggle("#contactPage .lines .top-line","fade-in-top")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#contactPage",duration:"100%"})
        .setClassToggle("#contactPage .lines .bottom-line","fade-in-bottom")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .about-info","fade-in-info")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skillsPage .skills-info","fade-in-info")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skillsPage .skills-tab","fade-in-tab")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .projects-info","fade-in-info")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#contactPage",duration:"100%"})
        .setClassToggle("#contactPage .contact-info","fade-in-info")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .about-links>span","fade-in-link")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .about-btns","fade-in-btn")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .projects-btns","fade-in-btn")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .about-image","fade-in-image")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#aboutPage",duration:"100%"})
        .setClassToggle("#aboutPage .about-tabs","fade-in-tabs")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skillsPage .grid-layout","fade-in-grid")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#skillsPage",duration:"100%"})
        .setClassToggle("#skillsPage .skills-up","fade-in-upgrid")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .projects-layout","fade-in-grid")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .projects-mobile-down1 > img","fade-in-mobile")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#projectsPage",duration:"100%"})
        .setClassToggle("#projectsPage .projects-mobile-down2 > img","fade-in-mobile")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#contactPage",duration:"100%"})
        .setClassToggle("#contactPage .contact-form","fade-in-form")
        .addTo(e);
    new ScrollMagic
        .Scene({triggerElement:"#contactPage",duration:"100%"})
        .setClassToggle("#contactPage .contact-title","fade-in-contact")
        .addTo(e);
})
