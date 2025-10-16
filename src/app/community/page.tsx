import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, MessageSquare, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const threads = [
  { id: 1, title: "Best way to learn React in 2024?", author: "Alex", replies: 24, votes: 102, tag: "React" },
  { id: 2, title: "UI/UX design trends for this year", author: "Priya", replies: 15, votes: 88, tag: "Design" },
  { id: 3, title: "Is Python still the best for Data Science?", author: "James", replies: 42, votes: 230, tag: "Data Science" },
];

export default function CommunityPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Community Forum</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Ask questions, share knowledge, and connect with fellow learners.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Start a New Thread
        </Button>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <Input placeholder="Search threads..." className="flex-1" />
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="data-science">Data Science</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Thread</TableHead>
              <TableHead className="hidden sm:table-cell">Tag</TableHead>
              <TableHead className="text-center">Replies</TableHead>
              <TableHead className="text-center">Votes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {threads.map((thread) => (
              <TableRow key={thread.id}>
                <TableCell>
                  <Link href="#" className="font-medium hover:text-primary">{thread.title}</Link>
                  <p className="text-sm text-muted-foreground">by {thread.author}</p>
                </TableCell>
                <TableCell className="hidden sm:table-cell"><Badge variant="secondary">{thread.tag}</Badge></TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    {thread.replies}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    {thread.votes}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
