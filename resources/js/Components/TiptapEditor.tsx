import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
    content: string;
    onChange: (content: string) => void;
}

const TiptapEditor = ({ content, onChange }: Props) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none max-w-none min-h-[200px] bg-gray-50 rounded-xl p-4 border border-gray-200 focus:border-indigo-500 transition",
            },
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="space-y-2">
            <div className="flex flex-wrap gap-2 mb-2 p-2 bg-white rounded-xl border border-gray-200">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={`p-1.5 rounded transition ${editor.isActive("bold") ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:bg-gray-100"}`}
                >
                    <b>B</b>
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={`p-1.5 rounded transition ${editor.isActive("italic") ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:bg-gray-100"}`}
                >
                    <i>I</i>
                </button>
                <span className="w-px h-6 bg-gray-200 mx-1" />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run();
                    }}
                    className={`p-1.5 rounded transition ${editor.isActive("heading", { level: 1 }) ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:bg-gray-100"}`}
                >
                    H1
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 2 })
                            .run();
                    }}
                    className={`p-1.5 rounded transition ${editor.isActive("heading", { level: 2 }) ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:bg-gray-100"}`}
                >
                    H2
                </button>
                <span className="w-px h-6 bg-gray-200 mx-1" />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={`p-1.5 rounded transition ${editor.isActive("bulletList") ? "bg-gray-200 text-gray-900" : "text-gray-500 hover:bg-gray-100"}`}
                >
                    List
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
