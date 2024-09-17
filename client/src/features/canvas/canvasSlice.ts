import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface CanvasSliceState {
  status: "idle" | "loading" | "failed"
}
