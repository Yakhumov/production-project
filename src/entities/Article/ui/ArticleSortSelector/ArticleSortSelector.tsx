import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./ArticleSortSelector.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

import { ArticleSortField } from "entities/Article/model/types/article";
import { Select } from "shared/ui/Select";

import { SortOrder } from "shared/types";
import { SelectOption } from "shared/ui/Select/ui/Select";

interface ArticleSortProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onchangeOrder:(newOrder: SortOrder)=>void
  onchangeSort:(newSort: ArticleSortField)=>void
}

export const ArticleSort: React.FC<ArticleSortProps> = (props) => {
  const { className,onchangeOrder,onchangeSort,sort,order } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t(" возрастанию "),
      },

      {
        value: "desc",
        content: t("Убыванию  "),
      },
    ],[]);

    const SortOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
          {
            value: ArticleSortField.CREATED,
            content: t("   дате создания "),
          },
    
          {
            value: ArticleSortField.TITLE,
            content: t(" названию "),
          },
          {
            value: ArticleSortField.VIEWS,
            content: t(" просмотрам  "),
          },
        ],[]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select options={SortOptions}  label={t("Сортировать ПО")} 
      value={sort}
      onChange={onchangeSort}
      />
      
      <Select options={orderOptions} label={t("По")} 
      value={order}
      onChange={onchangeOrder}  
      className={cls.order}  
      />
    </div>
  );
};

ArticleSort;
