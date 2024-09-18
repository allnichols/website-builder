import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface CanvasSliceState {
  status: "idle" | "loading" | "failed"
  error: string | null
  tree: { component: string; props: any; children: any }[]
}

const initialState: CanvasSliceState = {
  status: "idle",
  error: null,
  tree: [],
}

export const canvasSlice = createAppSlice({
  name: "canvas",
  initialState,
  reducers: {
    setTree(state, action: PayloadAction<any>) {
      console.log(action.payload)
      state.tree = action.payload
    },
    addToTree(state, action: PayloadAction<any>) {
      console.log(action.payload)
      state.tree.push(action.payload)
    },
  },

  selectors: {
    selectTree: canvas => canvas.tree,
  },
})

export const { setTree, addToTree } = canvasSlice.actions
export const { selectTree } = canvasSlice.selectors
