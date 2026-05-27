import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('pelaporan/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  search(@Query('keywords') keywords?: string) {
    const keywordArr = keywords ? keywords.split(',') : [];
    return this.searchService.search(keywordArr);
  }
}
