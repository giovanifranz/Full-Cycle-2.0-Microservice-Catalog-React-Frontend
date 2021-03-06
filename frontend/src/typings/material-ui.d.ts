/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="vite/client" />

import { ComponentNameToClassKey } from '@material-ui/core/styles/overrides'
import {
  PaletteOptions,
  Palette,
  PaletteColor,
  PaletteColorOptions
} from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MUIDataTable: any
    MUIDataTableToolbar: any
    MUIDataTableHeadCell: any
    MUIDataTableSelectCell: any
    MUIDataTableBodyCell: any
    MUIDataTableToolbarSelect: any
    MUIDataTableBodyRow: any
    MUIDataTablePagination: any
    MUIDataTableFilterList: any
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    success: PaletteColor
  }

  interface PaletteOptions {
    success?: PaletteColorOptions
  }
}
