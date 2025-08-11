import Habitica from "./habitica";

export interface Tag {
    id: string;
    name: string;
    challenge?: string;
}

export class TagService {
    private static instance: TagService;
    private importantTagId: string | null = null;

    static getInstance(): TagService {
        if (!TagService.instance) {
            TagService.instance = new TagService();
        }
        return TagService.instance;
    }

    async fetchTags(): Promise<Tag[]> {
        try {
            const res = await Habitica.instance?.call("https://habitica.com/api/v3/tags");
            if (res?.ok) {
                const data = await res.json();
                return data.data || [];
            }
            return [];
        } catch (error) {
            console.error("Error fetching tags:", error);
            return [];
        }
    }

    async createImportantTag(): Promise<string | null> {
        try {
            const tagData = {
                name: "Important",
            };

            const res = await Habitica.instance?.call("https://habitica.com/api/v3/tags", "POST", tagData);

            if (res?.ok) {
                const data = await res.json();
                this.importantTagId = data.data.id;
                return this.importantTagId;
            }
            return null;
        } catch (error) {
            console.error("Error creating Important tag:", error);
            return null;
        }
    }

    async getImportantTagId(): Promise<string | null> {
        if (this.importantTagId) {
            return this.importantTagId;
        }

        const tags = await this.fetchTags();
        const importantTag = tags.find((tag) => tag.name === "Important");

        if (importantTag) {
            this.importantTagId = importantTag.id;
            return this.importantTagId;
        }

        return await this.createImportantTag();
    }
}
