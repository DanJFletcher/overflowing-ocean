staticTest($._("Resize the div"), function() {
    var result = null;
    var descrip = $._("This webpage describes the ocean, with an image and a few paragraphs inside a `<*div*>`. In this first step, style the `<*div*>` so that it takes up 70% of the width and is 200px tall.");
    var displayP = "";
    
    var addedWidthHeightP = ".info { width: $w; height: $h; }";
    
    var addedWidthHeightValsP = ".info { width: 70%; height: 200px; }";
    
    var idSelectorP = "#info {}";
    var colonAfterInfoP  = ".info: {}";
    var addedIdP = "div[id]";
    var divSelectorP = "div {}";
    var divHasClassP = "div.info";
    
    result = cssMatch(addedWidthHeightP);
    if (passes(result)) {
        if (!cssMatches(addedWidthHeightValsP)) {
            result = fail($._("Is the div 70% wide and 200 pixels tall?"));
        }
    } else {
        if (cssMatches(colonAfterInfoP)) {
            result = fail($._("Hm, why is there a colon after the class name in your CSS selector?"));
        } else if (htmlMatches(addedIdP)) {
            result = fail($._("Did you add an `id` to the div? That's not necessary, it already had a class of 'info'."));
        } else if (cssMatches(idSelectorP)) {
            result = fail($._("Check your CSS selector- that's not quite how you select based on a class name."));
        } else if (cssMatches(divSelectorP)) {
            result = fail($._("That's a really general CSS selector, can you be more specific by selecting based on the class name?"));
        }
    }
    if (!htmlMatches(divHasClassP)) {
        result = fail($._("Hm, did you remove the 'info' class from the div?"));
    } 
    assertMatch(result, descrip, displayP);
});

staticTest($._("Make it scroll"), function() {
    var result = null;
    var descrip = $._("Now, make it so the div cuts off the overflowing text and presents a scrollbar instead.");
    var displayP = "";
    
    var addedOverflowP = ".info { overflow: auto; }";
    var addedOverflowYP = ".info { overflow-y: auto; }";
    var usedScrollValueP = ".info { overflow: scroll; }";
    var usedScrollValue2P = ".info { overflow-y: scroll; }";
    
    if (cssMatches(addedOverflowP) || cssMatches(addedOverflowYP)) {
        result = pass();
    } else {
        if (cssMatches(usedScrollValueP) || cssMatches(usedScrollValue2P)) {
            result = fail($._("It's better to use the `auto` value, because then it will only show scrollbars when necessary, not all the time."));
        } else {
            result = fail();
        }
    }
    assertMatch(result, descrip, displayP);
});

staticTest($._("Resize the img"), function() {
    var result = null;
    var descrip = $._("In this second step, resize the image so that it takes up the same width as the text.");
    var displayP = "";
    
    var addedWidthP = ".pic { width: $w;}";
    var addedWidthValsP = ".pic { width: 70%;}";
    var addedIdP = "img[id]";
    var imgSelectorP = "img { }";
    
    result = cssMatch(addedWidthP);
    if (passes(result)) {
        if (!cssMatches(addedWidthValsP)) {
            result = fail($._("Is the image 70% wide, like the div?"));
        }
    } else { 
        if (htmlMatches(addedIdP)) {
            result = fail($._("Did you add an `id` to the image? That's not necessary, it already had a class of 'pic'."));
        } else if (cssMatches(imgSelectorP)) {
            result = fail($._("That's a really general CSS selector, can you be more specific by selecting based on the class name?"));
        }
    }
    assertMatch(result, descrip, displayP);
});