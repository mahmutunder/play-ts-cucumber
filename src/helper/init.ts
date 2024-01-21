const fs = require("fs-extra");

async function setupDirectories() {
    try {
        await fs.ensureDir("test-results");
        await fs.emptyDir("test-results");
        console.log("Directory is ready and emptied.");
    } catch (error) {
        console.log("Folder not created or emptied! " + error);
    }
}

setupDirectories();
