export function formatDueDate(dateString: string): string {
    const dueDate = new Date(dateString);
    const today = new Date();

    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return "Due today";
    } else if (diffDays === 1) {
        return "Due tomorrow";
    } else if (diffDays === -1) {
        return "Due yesterday";
    } else if (diffDays > 1 && diffDays <= 7) {
        return `Due in ${diffDays} days`;
    } else if (diffDays < -1 && diffDays >= -7) {
        return `Due ${Math.abs(diffDays)} days ago`;
    } else {
        return `Due ${dueDate.toLocaleDateString()}`;
    }
}
