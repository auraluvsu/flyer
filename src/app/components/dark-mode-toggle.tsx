import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "./dark-mode-context";

export function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:scale-105"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700" />
            )}
        </button>
    );
}
