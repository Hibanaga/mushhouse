export function scrollToPositionId (id: string, position:ScrollLogicalPosition = 'start') {
    const violation = document.getElementById(id.toLowerCase());
    violation && violation.scrollIntoView({ behavior: 'smooth', block: position });
};
