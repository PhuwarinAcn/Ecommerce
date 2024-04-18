import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageHeader } from "../_components/PageHeader";

export default function AdminProductPage() {
  return (
    <>
      <div className="flex justify-between items-center gap4">
        <PageHeader>Products</PageHeader>
        <Button>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
}

function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available for Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
}