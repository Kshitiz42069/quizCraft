export interface User {
    _id: string;
    fullname: string;
    email: string;
    examPreference?: ('SSC' | 'UPSC' | 'Banking' | 'Railways' | 'Defence' | 'Other')[];
    attempts?: {
        quizId: string;
        score: number;
        date?: string;
    }[];
    createdAt?: string;
    updatedAt?: string;
}
