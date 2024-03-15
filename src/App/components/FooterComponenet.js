export default function FooterComponent() {
    return(
        <footer class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6" itemScope itemType="http://schema.org/Person">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Luc van Kessel, 2024
            </span>
            <div class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <a className="mx-2" href="https://www.linkedin.com/in/luc-van-kessel-1448a71a2">Linkedin</a>
                <a className="mx-2" href="https://github.com/lucvankessel">Github</a>
            </div>
        </footer>
    );
}