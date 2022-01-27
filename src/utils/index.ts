export const getTime = (created_utc: number): string | null => {
    const nowTimeInSec = new Date().getTime() / 1000;
    const agoTimeInMin = Math.ceil((nowTimeInSec - created_utc) / 60);
    const agoTimeInHr = Math.floor(agoTimeInMin / 60);
    const agoTimeInDay = Math.floor(agoTimeInHr / 24);

    if (agoTimeInDay && agoTimeInDay < 30) {
        return `${agoTimeInDay} day ago`
    }

    if (agoTimeInHr) {
        return `${agoTimeInHr} hr. ago`
    }

    if (agoTimeInMin) {
        return `${agoTimeInMin} min. ago`
    }

    return 'over a month ago';
}