function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const codeAnimation = document.getElementById("code-animation");

    // Java Code for Background Effect
    const javaCode = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Welcome to My Portfolio!");
    }
}`;

    let i = 0;

    function typeCode() {
        if (i < javaCode.length) {
            codeAnimation.innerHTML += javaCode.charAt(i);
            i++;
            setTimeout(typeCode, 30); // Adjust speed
        }
    }

    typeCode();
});
