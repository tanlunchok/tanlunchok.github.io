// Register the GSAP Observer plugin.
gsap.registerPlugin(Observer);

// Select all of the elements on the page that will be used in the animation.
let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),

    // Split the section headings into individual characters, words, and lines.
    splitHeadings = headings.map(
        (heading) =>
            new SplitText(heading, {
                type: "chars,words,lines",
                linesClass: "clip-text"
            })
    ),

    // Track the current section that is being displayed.
    currentIndex = -1,

    // Wrap the current index to ensure that it is always within a valid range.
    wrap = gsap.utils.wrap(0, sections.length),

    // Indicate if the animation is currently running.
    animating;

// Set the initial position of the outer wrapper and inner wrapper elements.
gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

// Function to navigate to a specific section on the page.
function gotoSection(index, direction) {
    // Wrap the index to ensure that it is always within a valid range.
    index = wrap(index);

    // Set the animating flag to true.
    animating = true;

    // Determine if the navigation is from the top or the bottom of the page.
    let fromTop = direction === -1,

        // Calculate the direction factor.
        dFactor = fromTop ? -1 : 1,

        // Create a GSAP timeline to animate the transition to the new section.
        tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => (animating = false)
        });

    // If there is a current section, animate it out of view.
    if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
            sections[currentIndex],
            { autoAlpha: 0 }
        );
    }

    // Set the new section to be displayed and animate it into view.
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
            yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor)
        },
        {
            yPercent: 0
        },
        0
    )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
            splitHeadings[index].chars,
            {
                autoAlpha: 0,
                yPercent: 150 * dFactor
            },
            {
                autoAlpha: 1,
                yPercent: 0,
                duration: 1,
                ease: "power2",
                stagger: {
                    each: 0.02,
                    from: "random"
                }
            },
            0.2
        );

    // Set the current section index.
    currentIndex = index;
}

// Create a GSAP Observer instance to listen for wheel, touch, and pointer events.
Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true
});

// Navigate to the first section on the page.
gotoSection(0, 1);