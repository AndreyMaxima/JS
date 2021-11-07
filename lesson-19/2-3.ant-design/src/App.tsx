import React, { createRef, ReactElement, useState } from 'react';
import {
  Button, Dropdown, Input, Pagination, Select, TreeSelect,
} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './App.css';

const { Option } = Select;

const renderPagination = () => {
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const handlePaginationChange = (currentPage: number, size?: number) => {
    size && setPageSize(size);
    setPage(currentPage);
  };
  const itemRender = (currentPage: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: ReactElement) => {
    switch (type) {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      case 'prev': return <a>Предудыщая</a>;
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      case 'next': return <a>Следующая</a>;
      case 'jump-next':
      // eslint-disable-next-line jsx-a11y/anchor-is-valid,no-fallthrough
      case 'jump-prev': return <a>...</a>;
      default: return originalElement;
    }
  };
  const showTotal = (
    total: number, // Общее кол-во записей
    range: Array<number>, // Массив, где нулевой элемент - номер первой отображённой записи, а первый - номер последней отобрадённой записи
  ) => `Отображено с ${range[0]} по ${range[1]} из ${total}`;
  return (
    <div id="pagination">
      <Pagination
        size={'default' /* Размер компонента */}
        total={200 /* Общее кол-во записей */}
        pageSize={pageSize /* Кол-во записей на страницу */}
        // Показать элемент кол-ва записей на страницу
        showSizeChanger
        // Показать Go to
        showQuickJumper
        // simple-mode
        simple={false}
        // Функция-коллбек для изменения кол-ва элементов на странице
        onShowSizeChange={handlePaginationChange}
        // Функция-коллбек для изменения текущей страницы
        onChange={handlePaginationChange}
        // Текущая страница
        current={page}
        // Функция возвращабщая строку с описанием с какого по какой элемент отобрадены записи
        showTotal={showTotal}
        // Кастомизация элементов
        itemRender={itemRender}
        disabled
      />
    </div>
  );
};

const renderButtons = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div id="buttons">
      <Button
        icon={<DownloadOutlined />}
        onClick={handleClick}
        size="large"
        loading={loading}
        type="primary"
      >
        Кнопочка
      </Button>
      <Button
        danger
        loading
        type="text"
      >
        Danger кнопочка
      </Button>
      <Button
        size="small"
        type="dashed"
      >
        Dashed кнопочка
      </Button>
      <Button
        href="https://google.com"
        type="link"
      >
        Link кнопочка
      </Button>
    </div>
  );
};

const renderItputs = () => {
  const formIdRef = createRef<HTMLDivElement>();
  const helper = (
    <ul style={{ border: '1px solid black' }}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  );
  const preSelect = (
    <Select defaultValue="https://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const postSelect = (
    <Select defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".net">.net</Option>
    </Select>
  );

  const [inputValue, setInputValue] = useState('');

  return (
    <div id="form-items" ref={formIdRef}>
      <Dropdown
        // Блок для отображения дропдауна
        overlay={helper}
        trigger={['click']}
        placement="topCenter"
        // visible
        // Функция, возвращающая предок дропдауна (если не указана, то document.body)
        getPopupContainer={() => formIdRef.current || document.body}
      >
        {/* Блок при взаимодействии с которым дропдаун будет отображён */}
        <Button type="text">Кликни по мне</Button>
      </Dropdown>
      <Input
        size="small"
        addonBefore={preSelect}
        addonAfter={postSelect}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Input
        size="middle"
        prefix={<span>+</span>}
        suffix={<span>RUR</span>}
      />
      <Input
        placeholder="any text"
        size="large"
        allowClear
        type="text"
        bordered={false}
      />
      <Input.Search
        placeholder="search anything in internet"
        onSearch={(str) => console.log(str)}
        allowClear
        // enterButton={<Button>Поиск</Button>}
        enterButton={<DownloadOutlined />}
      />
      <Input.Password
        // visibilityToggle={false}
        iconRender={(visible: boolean) => <span>{visible ? 'Скрыть' : 'Показать'}</span>}
      />
      <Input.TextArea
        // onResize={(e) => console.log(e)}
        autoSize={
          {
            minRows: 3,
            maxRows: 5,
          }
        }
      />
    </div>
  );
};

const renderSelects = () => {
  const [activeOption, setActiveOption] = useState();
  const [selectArr, setSelectArr] = useState(['Россия', 'Польша', 'Чехия', 'США', 'Республика Филиппины', 'Норвегия']);

  return (
    <div id="select-items">
      <Select
      // defaultValue={0}
        placeholder="Выберете страну"
        value={activeOption}
        onChange={((index) => setActiveOption(index))}
        className="select"
        optionFilterProp="children"
        filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) === 0}
        showSearch
        dropdownRender={(original) => (
          <div>
            {original}
            <Input.Search
              enterButton="+"
              onSearch={(newValue) => setSelectArr([...selectArr, newValue])}
            />
          </div>
        )}
      >
        {selectArr.map((elem, index) => <Option value={index} key={index}>{elem}</Option>)}
      </Select>
      <Select
        size="large"
        defaultValue={[1, 2, 3]}
        mode="multiple"
        placeholder="Выберете страну"
        className="select"
        optionFilterProp="children"
        filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) === 0}
        showSearch
      >
        {selectArr.map((elem, index) => <Option value={index} key={index}>{elem}</Option>)}
      </Select>
    </div>
  );
};

const renderTreeSelects = () => {
  const defaultTreeData = [{
    id: 1,
    pId: 0,
    value: '1',
    title: 'Европа',
    isLeaf: false,
  },
  {
    id: 2,
    pId: 0,
    value: '2',
    title: 'Азия',
    isLeaf: false,
  }];
  const [treeData, setTreeData] = useState(defaultTreeData);

  const loadData = ({ id }: any) => new Promise<void>((res) => setTimeout(() => {
    switch (id) {
      case 1: setTreeData([
        ...treeData,
        {
          id: 3,
          pId: id,
          value: '1-0',
          title: 'Россия',
          isLeaf: true,
        },
        {
          id: 4,
          pId: id,
          value: '1-1',
          title: 'Германия',
          isLeaf: true,
        }]); break;
      case 2: setTreeData([
        ...treeData,
        {
          id: 5,
          pId: id,
          value: '1-0',
          title: 'Китай',
          isLeaf: true,
        },
        {
          id: 6,
          pId: id,
          value: '1-1',
          title: 'Япония',
          isLeaf: true,
        }]); break;
      default: setTreeData(defaultTreeData);
    }
    res();
  }, 1000));

  return (
    <div id="tree-selects">
      <TreeSelect
        className="select"
        multiple
        treeCheckable
        defaultValue={['0-0', '0-1']}
      >
        <TreeSelect.TreeNode value="0" title="Европа" selectable={false}>
          <TreeSelect.TreeNode value="0-0" title="Россия" />
          <TreeSelect.TreeNode value="0-1" title="Германия" />
        </TreeSelect.TreeNode>
        <TreeSelect.TreeNode value="1" title={<span>Азия</span>} selectable={false}>
          <TreeSelect.TreeNode value="1-0" title="Китай" disabled />
          <TreeSelect.TreeNode value="1-1" title="Япония" />
        </TreeSelect.TreeNode>
      </TreeSelect>
      <TreeSelect
        multiple
        treeDataSimpleMode
        className="select"
        treeData={treeData}
        loadData={loadData}
      />
    </div>
  );
};

const App = () => (
  <div id="app">
    {renderPagination()}
    {renderButtons()}
    {renderItputs()}
    {renderSelects()}
    {renderTreeSelects()}
  </div>
);

export default App;
