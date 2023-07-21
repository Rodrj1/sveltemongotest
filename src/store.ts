import { writable, type Writable } from 'svelte/store';
import type { Note } from './types';

export let userNotes: Writable<Note[]> = writable([]);
