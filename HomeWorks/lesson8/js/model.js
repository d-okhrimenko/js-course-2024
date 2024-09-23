const Model = {
    async fetchBooks() {
        try {
            const response = await fetch('books.json');
            if (!response.ok) throw new Error('Failed to load data');
            return await response.json();
        } catch (error) {
            console.error('Error fetching books:', error);
            return [];
        }
    }
};