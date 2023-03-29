import { importMapsPlugin } from "@web/dev-server-import-maps";

import { writeImportMapFiles } from "@jsenv/importmap-node-module"

let importmaps = await writeImportMapFiles({
  projectDirectoryUrl: new URL("./", import.meta.url),
  importMapFiles: {
    "./importmap_for_dev.importmap": {
      mappingsForNodeResolution: true,
      mappingsForDevDependencies: true,
    },
    "./importmap_for_prod.importmap": {
      mappingsForNodeResolution: true,
    },
  },
})



export default {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: importmaps['./importmap_for_dev.importmap'],
      },
    }),
  ],
};
