function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const codeAnimation = document.getElementById("code-animation");

        const javaCode = `public class HelloWorld {
    public static void main(String[] args) {
        Greetings();
    }

    public static void Greetings() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Welcome to My Portfolio, " + name + "!");
        scanner.close();
    }
}`;
    
        let deleting = false;
        let i = 0;

        function typeAndDelete(){
            if(!deleting){
                if(i < javaCode.length){
                    codeAnimation.innerHTML += javaCode.charAt(i);
                    i++;
                    setTimeout(typeAndDelete, 30);
                }
                else{
                    deleting = true;
                    setTimeout(typeAndDelete, 1000);
                }
            } else {
                if(i > 0){
                    codeAnimation.innerHTML = javaCode.substring(0, i - 1);
                    i--;
                    setTimeout(typeAndDelete, 20);
                }
                else{
                    deleting = false;
                    setTimeout(typeAndDelete, 500);
                }
            }
        }

    typeAndDelete();
});
