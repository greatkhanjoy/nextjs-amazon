import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
const categories = ['men', 'women', 'kids', 'accessories']

export default async function Search() {
  return (
    <form action='/search' className='flex items-stretch h-10' method='get'>
      <Select name='category'>
        <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md'>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category} className='text-black'>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        name='q'
        placeholder={`Search Site ${APP_NAME}...`}
        className='flex rounded-none dark:border-gray-200 text-black text-base h-full'
      />
      <button
        type='submit'
        className='bg-yellow-400 text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'
      >
        <SearchIcon className='h-6 w-6 text-black' />
      </button>
    </form>
  )
}
