import { cardProductKeys } from '@repository/repository/card-product/card-product-keys';
import { CardProductDB } from '../types/card-product-db';

export class UpdateCardProductDto implements Partial<CardProductDB> {
  public article?: string;
  public in_stock?: number;
  public detail_name?: string;
  public included_in_unit?: string;
  public brand?: string;
  public model?: string;
  public version?: string;
  public body_type?: string;
  public year?: number;
  public engine?: string;
  public volume?: number;
  public engine_type?: string;
  public gearbox?: string;
  public original_number?: string;
  public price?: number;
  public for_naked?: string;
  public currency?: string;
  public discount?: number;
  public description?: string;
  public year_start_production?: number;
  public year_end_production?: number;
  public url_photo_details?: string;
  public url_car_photo?: string;
  public video?: string;
  public phone?: string;
  public vin?: string;

  constructor(params: Partial<CardProductDB>) {
    (cardProductKeys as (keyof CardProductDB)[]).forEach((key) => {
      if (key in params) {
        this[key as string] = params[key] as keyof CardProductDB;
      }
    });
  }

  public getUpdateData() {
    const updateData: Partial<CardProductDB> = {};

    cardProductKeys.forEach((key) => {
      if (key in this && !!this[key]) {
        updateData[key as string] = this[key];
      }
    });

    return updateData as CardProductDB;
  }
}
