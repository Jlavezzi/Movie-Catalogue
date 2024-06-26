# Movie-Catalogue


Add MongoDB to PATH: If MongoDB is installed but not included in your system's PATH, you can add the MongoDB bin directory to your PATH environment variable. The bin directory typically contains the MongoDB executable files, including mongostat. The exact steps to do this depend on your operating system.

    On Windows: You can add MongoDB to your PATH by following these steps:
        Open File Explorer and navigate to the MongoDB installation directory (usually C:\Program Files\MongoDB\Server\<version>\bin).
        Copy the path to the bin directory.
        Right-click on "This PC" or "Computer" in File Explorer and select "Properties."
        Click on "Advanced system settings" on the left sidebar.
        In the System Properties window, click on the "Environment Variables..." button.
        In the Environment Variables window, under "System variables," find the "Path" variable and select it.
        Click on the "Edit..." button.
        Click on the "New" button and paste the path to the MongoDB bin directory.
        Click "OK" to close all windows.
        Restart your terminal and try running mongostat again.