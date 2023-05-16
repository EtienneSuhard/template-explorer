import { describe, it, expect } from 'vitest';
import { teams } from './templates';

describe('templates', () => {
	it('return list of all teams', () => {
		expect(teams).toContain(['TEAM1', 'TEAM2']);
	});
});
