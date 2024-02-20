const reportIdMessage = (report_id: string | null) => {
    if (reportIdMessage == null) {
        return "No report ID provided";
    } else {
        return `report ID: ${report_id}`;
    }
};

class ApiError extends Error {
    code: string;
    report_id?: string | null;

    constructor(code: string, report_id: string | null) {
        super(`API call filed: ${code} (${reportIdMessage(report_id)})`);

        this.code = code;
        this.report_id = report_id;
    }
}

export { ApiError }
