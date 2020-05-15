/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OAuthProvider {
  GUSTO = "GUSTO",
  ASANA = "ASANA",
  GOOGLE = "GOOGLE",
  ZOOM = "ZOOM",
  SLACK = "SLACK",
  HUBSPOT = "HUBSPOT",
}

/**
 * OAuthProvider
 */
export const OAuthProviderEnum = types.enumeration("OAuthProvider", [
  "GUSTO",
  "ASANA",
  "GOOGLE",
  "ZOOM",
  "SLACK",
  "HUBSPOT",
])
