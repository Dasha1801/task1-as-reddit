import { getTime } from './index';

describe('Test getTime function', () => {

    beforeEach(() => {
        const mockDate = new Date('2022-02-01 09:00:00');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.Date = jest.fn(() => mockDate);
    })

    test('Checking what the function returns', () => {
        expect(getTime(1643694600)).toBe('10 min. ago');
        expect(getTime(1643695199)).toBe('1 min. ago');
        expect(getTime(1643684400)).toBe('3 hr. ago');
        expect(getTime(1643435400)).toBe('3 day ago');
        expect(getTime(1638165000)).toBe('over a month ago');
    });
})



