// ------------------------------ MESSAGES -------------------------------------
// ------------ STEP 1
var widthHeightValsM = "Is the div 70% wide and 200 pixels tall?",
    colonAfterInfoM = "Hm, why is there a colon after the class name in your CSS selector?",
    addedIdInfoM = "Did you add an `id` to the div? That's not necessary, it already had a class of 'info'.",
    idSelectorM = "Check your CSS selector- that's not quite how you select based on a class name.",
    divSelectorM = "That's a really general CSS selector, can you be more specific by selecting based on the class name?",
    divHasClassM = "Hm, did you remove the 'info' class from the div?",
    addedPicSelectorM = "For this step, you should style the div with a class of '`info`' - not the image.";
    
    
// ----------- STEP 2
var usedScrollValueM = "It's better to use the `auto` value, because then it will only show scrollbars when necessary, not all the time.";


// ----------- STEP 3
var addedWidthValsM = "Is the image 70% wide, like the div?",
    addedIdPicM = "Did you add an `id` to the image? That's not necessary, it already had a class of 'pic'.",
    imgSelectorM = "That's a really general CSS selector, can you be more specific by selecting based on the class name?",
    addedWidthAttrM = "You should be using a CSS rule to style the size of the image, not a “`width`” HTML attribute. Can you remove that attribute from your <`img`> tag, and write a CSS rule insead?",
    addedHeightAttrM = "You should be using a CSS rule to style the size of the image, not a “`height`” HTML attribute. Can you remove that attribute from your <`img`> tag, and write a CSS rule insead?";





// --------------------------- CHALLENGE STEPS ---------------------------------
// =============================================================================



// ------------------------------- STEP 1 --------------------------------------
// ======================================

staticTest($._("Resize the div"), function() {
    var result = null;
    var descrip = $._("This webpage describes the ocean, with an image and a few paragraphs which are inside a <`div`>.\n\n In this first step, style the <`div`> that has a class of '`info`', so that it takes up 70% of the width and is 200px tall.");
    var displayP = "";
    
    var addedWidthHeightP = ".info { width: $w; height: $h; }";
    
    var addedWidthHeightValsP = ".info { width: 70%; height: 200px; }";
    
    var idSelectorP = "#info {}";
    var colonAfterInfoP  = ".info: {}";
    var addedIdP = "div[id]";
    var divSelectorP = "div {}";
    var divHasClassP = "div.info";
    var addedPicSelectorP = ".pic {}";
    
    result = cssMatch(addedWidthHeightP);
    
    if (passes(result)) {
        
        // width or height values don't match pattern.
        if (!cssMatches(addedWidthHeightValsP)) {
            
            result = fail($._(widthHeightValsM));
            
        }
    } else { // fails
        
        // uses a colon after CSS selector
        if (cssMatches(colonAfterInfoP)) {
            result = fail($._(colonAfterInfoM));
            
        // adds id to the div
        } else if (htmlMatches(addedIdP)) {
            result = fail($._(addedIdInfoM));

        // selects using id selector
        } else if (cssMatches(idSelectorP)) {
            result = fail($._(idSelectorM));
            
        // selects using 'div' element selector
        } else if (cssMatches(divSelectorP)) {
            result = fail($._(divSelectorM));
        
        
        // added a rule for the "pic" class
        } else if (cssMatches(addedPicSelectorP)) {
            result = fail($._(addedPicSelectorM));
        }
    }
    
    // If pass OR fail
    // If class 'info' removed from div
    if (!htmlMatches(divHasClassP)) {
        result = fail($._(divHasClassM));
    } 
    assertMatch(result, descrip, displayP);
});





// ------------------------------- STEP 2 --------------------------------------
// ======================================

staticTest($._("Make it scroll"), function() {
    var result = null;
    var descrip = $._("Now, make it so the div cuts off the overflowing text and presents a scrollbar instead.");
    var displayP = "";
    
    var addedOverflowP = ".info { overflow: auto; }";
    var addedOverflowYP = ".info { overflow-y: auto; }";
    var addedOverflowXP = ".info { overflow-x: auto; }";
    var usedScrollValueP = ".info { overflow: scroll; }";
    var usedScrollValue2P = ".info { overflow-y: scroll; }";
    
    
    
    // [TODO] clean up this block.
    result = anyPass(cssMatch(addedOverflowP), cssMatch(addedOverflowYP), cssMatch(addedOverflowXP));
    
    if (!passes(result)) {
        
        // Assigns 'scroll' to 'overflow'.
        if (cssMatches(usedScrollValueP) || cssMatches(usedScrollValue2P)) {
            result = fail($._(usedScrollValueM));
        } 
    }
    
    assertMatch(result, descrip, displayP);
    
});


// ------------------------------- STEP 3 --------------------------------------
// ======================================

staticTest($._("Resize the img"), function() {
    var result = null;
    var descrip = $._("In this last step, write a CSS rule for the ‘pic’ class that resizes the image to take up the same width as the text.");
    var displayP = "";
    
    var addedWidthP = ".pic { width: $w;}";
    var addedWidthValsP = ".pic { width: 70%;}";
    var addedIdP = "img[id]";
    var imgSelectorP = "img { }";
    var addedWidthAttrP = "img[width]";
    var addedHieghtAttrP = "img[height]";
    
    result = cssMatch(addedWidthP);
    
    if (passes(result)) {
        
        // width property value does not match pattern (70%).
        if (!cssMatches(addedWidthValsP)) {
            result = fail($._(addedWidthValsM));
        }
    } else { 
        
        // added id to <img> tag.
        if (htmlMatches(addedIdP)) {
            result = fail($._(addedIdPicM));
            
        // uses 'img' element selector
        } else if (cssMatches(imgSelectorP)) {
            result = fail($._(imgSelectorM));
        
        // uses 'width' attribute inside <img> tag
        } else if (htmlMatches(addedWidthAttrP)) {
            result = fail($._(addedWidthAttrM));
            
        // uses 'height' attribute inside <img> tag
        } else if (htmlMatches(addedHieghtAttrP)) {
            result = fail($._(addedHeightAttrM));
        }
    }
    assertMatch(result, descrip, displayP);
});