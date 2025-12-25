<template>
  <a-card :bordered="false">
 
    <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :components="handleDrag(columns)"
      >
    </a-table>
 
  </a-card>
</template>
 
<script>
import VueDraggableResizable from 'vue-draggable-resizable'
 
export default {
  components: {
    VueDraggableResizable
  },
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
      form: null,
        //表头
      columns: [
        {
          title: '项目名称',
          dataIndex: 'projectName',
          ellipsis: true,
          width:200,
        },
        {
          title: '企业名称',
          dataIndex: 'company',
          ellipsis: true,
          width:200,
        },
        {
          title: '责任人',
          dataIndex: 'liablePersonName',
          ellipsis: true,
          width:200,
        },
        {
          title: '附件',
          dataIndex: 'picture',
          width: 400,
          scopedSlots: { customRender: 'fujian' },
        },
        {
          title: '操作',
          // fixed: 'right',
          dataIndex: 'action',
          width: 200,
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
  
  methods:{
    handleDrag(column){
     return {
     header: {
       cell: (h, props, children) => {
       const { key, ...restProps } = props
       const col = column.find((col) => {
         const k = col.dataIndex || col.key
         return k === key
       })

       if (!col || !col.width) {
         return h('th', { ...restProps }, [...children])
       }

       const dragProps = {
         key: col.dataIndex || col.key,
         class: 'table-draggable-handle',
         attrs: {
           w: 10,
           x: col.width,
           z: 1,
           axis: 'x',
           draggable: true,
           resizable: false,
         },
         on: {
           dragging: (x, y) => {
             col.width = Math.max(x, 1)
           },
         },
       }
       const drag = h(VueDraggableResizable, { ...dragProps })
       return h('th', { ...restProps, class: 'resize-table-th' }, [...children, drag])
     },
   }
   }
    },
  },
  created() {},
}
</script>
 
<style>
.table-draggable-handle {
  /* width: 10px !important; */
  height: 100% !important;
  left: auto !important;
  right: -5px;
  cursor: col-resize;
  touch-action: none;
  border: none;
  position: absolute;
  transform: none !important;
  bottom: 0;
}
.resize-table-th {
  position: relative;
}
</style>
