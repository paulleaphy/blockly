/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Leaphy Common Blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.leaphyCommon');  // Deprecated
goog.provide('Blockly.Constants.LeaphyCommon');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.Mutator');

Blockly.Blocks['leaphy_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LEAPHY_START)
        .setAlign(Blockly.ALIGN_CENTRE);
    this.setStyle('leaphy_blocks');
    this.appendStatementInput('STACK');
    this.setDeletable(false);
  }
};

Blockly.Blocks['leaphy_serial_print_line'] = {
  /**
     * Block for printing to serial output
     * @this Blockly.Block
     */
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LEAPHY_SERIAL_PRINT);
    this.appendValueInput('VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('leaphy_blocks');
  },
};

Blockly.Blocks['leaphy_serial_print_value'] = {
  /**
     * Block for printing to serial output
     * @this Blockly.Block
     */
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LEAPHY_SERIAL_PRINT);
    this.appendValueInput('NAME');
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput('VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('leaphy_blocks');
  },
};

// Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

// ]);  // END JSON EXTRACT (Do not delete this comment.)
