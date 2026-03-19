#!/usr/bin/env node
'use strict';

const readline = require('readline');
const { spawn } = require('child_process');

const GITHUB_URL = 'https://github.com/mertuykuseven';
const X_URL      = 'https://x.com/benmertu';

const ASCII_ART = `
 _                                    _
| |__   ___ _ __  _ __ ___   ___ _ __| |_ _   _
| '_ \\ / _ \\ '_ \\| '_ \` _ \\ / _ \\ '__| __| | | |
| |_) |  __/ | | | | | | | |  __/ |  | |_| |_| |
|_.__/ \\___|_| |_|_| |_| |_|\\___|_|   \\__|\\__,_|
`;

const MENU_ITEMS = [
  { label: 'Click to open Github Profile on your browser', url: GITHUB_URL },
  { label: 'Click to open my X (twitter) profile',        url: X_URL },
  { label: 'exit',                                         url: null },
];
