[{
    code: "<style>.info { width: 60%; height: 100px; }</style><div class='info'></div>",
    steps: ["Is the div 70% wide and 200 pixels tall?"]
},{
    code: "<style>.info { width: 60%; height: 100px; }</style><div class='grass'></div>",
    steps: ["Hm, did you remove the 'info' class from the div?"]
},
{
    code: "<style>#info { width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["Check your CSS selector- that's not quite how you select based on a class name."]
},{
    code: "<style>div { width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["That's a really general CSS selector, can you be more specific by selecting based on the class name?"]
},
{
    code: "<style>.info { width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["pass"]
},
{
    code: "<style>#info { width: 70%; height: 200px; }</style><div id='info' class='info'></div>",
    steps: ["Did you add an `id` to the div? That's not necessary, it already had a class of 'info'."]
},
{
    code: "<style>.info: { width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["Hm, why is there a colon after the class name in your CSS selector?"]
},
{
    code: "<style>.pic { width: 60%;} .info { overflow: scroll; width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["pass", "It's better to use the `auto` value, because then it will only show scrollbars when necessary, not all the time.", "Is the image 70% wide, like the div?"]
},
{
    code: "<style>img { width: 60%;} .info { overflow: auto; width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["pass", "pass", "That's a really general CSS selector, can you be more specific by selecting based on the class name?"]
},
{
    code: "<style>.pic { width: 60%;} .info { overflow: auto; width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["pass", "pass", "Is the image 70% wide, like the div?"]
},{
    code: "<style>#pic { width: 70%;} .info { overflow: auto; width: 70%; height: 200px; }</style><img id='pic'><div class='info'></div>",
    steps: ["pass", "pass", "Did you add an `id` to the image? That's not necessary, it already had a class of 'pic'."]
},{
    code: "<style>.pic { width: 70%;} .info { overflow: auto; width: 70%; height: 200px; }</style><div class='info'></div>",
    steps: ["pass", "pass", "pass"]
},


{   // added width attribute to <img> tag.
    code: "<style> .info { overflow: auto; width: 70%; height: 200px; }</style><img width='70%'><div class='info'></div>",
    steps: ["pass", "pass", "You should be using a CSS rule to style the size of the image, not a “`width`” HTML attribute. Can you remove that attribute from your <`img`> tag, and write a CSS rule insead?"]
},


{   // added height attribute to <img> tag.
    code: "<style> .info { overflow: auto; width: 70%; height: 200px; }</style><img height='200px'><div class='info'></div>",
    steps: ["pass", "pass", "You should be using a CSS rule to style the size of the image, not a “`height`” HTML attribute. Can you remove that attribute from your <`img`> tag, and write a CSS rule insead?"]
}


]