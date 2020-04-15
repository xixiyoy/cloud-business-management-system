<template>
  <div class="agent-report">
    <div class="agent-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button>
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div>
          </el-col>
          <el-col :span="13">
            <div class="block">
              <el-date-picker
                type="date"
                placeholder="统计年份">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-dropdown style="float:right;">
                <el-button>
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>全部</el-dropdown-item>
                  <el-dropdown-item>未申请</el-dropdown-item>
                  <el-dropdown-item>待确认</el-dropdown-item>
                  <el-dropdown-item>已确认</el-dropdown-item>
                  <el-dropdown-item>已驳回</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
    </div>
    <div class="agent-table-show">
      <el-tabs type="border-card" v-model="getAccountsForm.type" @tab-click="handelTabClick" class="agent-report-tabs">
        <el-tab-pane v-for="(tab, index) in accountLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="accounts.list"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="selection"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="customerName"
              label="客户名称"
              :show-overflow-tooltip="true"
              header-align="center">
            </el-table-column>
            <el-table-column label="完成情况 (2020)"
                header-align="center"
                border="false">
              <el-table-column
                prop="province"
                label="1月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(1, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="city"
                label="2月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(2, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="3月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(3, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="4月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(4, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="5月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(5, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="6月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(6, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="7月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(7, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="8月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(8, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="9月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(9, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="10月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(10, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="11月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(11, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="12月">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(12, scope.row)"></i>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="newestTask.relUserName"
              label="财税顾问"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="newestTask.relDeptName"
              label="部门"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="newestTask.price"
              label="月服务费"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="collectStatusName"
              label="收款状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="royaltyStatusName"
              label="提成状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作"
              header-align="center">
              <template slot-scope="scope">
                <el-dropdown @command="handleDealServiceCommand">
                  <span class="el-dropdown-link">
                    <el-button type="text" icon="el-icon-more"></el-button>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="isCanEdit(scope.row)" :command="'edit' + scope.row.customerId">编辑</el-dropdown-item>
                    <el-dropdown-item v-if="isCanView(scope.row)" :command="'view' + scope.row.customerId">查看</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-row :gutter="10" style="margin-top:20px;">
          <el-col :span="3">
            <template>
              <el-radio-group v-model="radio">
                <el-radio label="未收款"></el-radio>
              </el-radio-group>
            </template>
          </el-col>
          <el-col :span="3">
            <template>
              <el-radio-group v-model="radio">
                <el-radio label="已收款"></el-radio>
              </el-radio-group>
            </template>
          </el-col>
          <el-col :span="3">
            <template>
              <el-radio-group v-model="radio">
                <el-radio label="已发提成"></el-radio>
              </el-radio-group>
            </template>
          </el-col>
        </el-row>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="handleCurrentChangeClick"
          :current-page="getAccountsForm.page"
          :total="accounts.totalCount">
        </el-pagination>
      </div>
    </div>
    <!-- 未申请 0 未申请 0 提交弹窗-->
    <el-dialog title="提交收款" :visible.sync="submitReceiveEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户：">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号：">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户：" required>
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数：" required>
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期：" required>
              <div class="block">
                <el-date-picker
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitReceive = false">确 定</el-button>
        <el-button @click="submitReceive = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 提交收款后修改-->
    <el-dialog title="收款记录" :visible.sync="submitReceiveViewVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>待确认</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审批人:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitReceiveViewVisible = false">修 改</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 驳回后展示-->
    <el-dialog title="收款记录" :visible.sync="oneZeroEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>已驳回</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="oneZeroEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 提交收款待审核查看-->
    <el-dialog title="收款记录" :visible.sync="oneZeroViewVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="oneZeroViewVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款待审核后 -->
    <el-dialog title="收款详情" :visible="oneZeroVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">驳 回</el-button>
        <el-button @click="dialogFormVisible = false">确认收款</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 已确认后我提交的点击后的查看 -->
    <el-dialog title="收款详情" :visible.sync="firstYiqueren">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>已确认</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="firstYiqueren = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成操作 -->
                <el-dialog title="提交提成" :visible="secondSubmitVisible">
                  <el-form>
                    <el-form-item label="提成月数：" required>
                      <div class="block">
                        <el-date-picker
                          type="date"
                          placeholder="">
                        </el-date-picker>
                      </div>
                    </el-form-item>
                    <el-form-item label="提成金额：">
                      <el-input></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                  </div>
                </el-dialog>
    <!-- 提交收款确认后提交提成审批操作 -->
    <el-dialog title="提交提成">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程</span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">修 改</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批 确认的 操作 -->
    <el-dialog title="提成记录">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程</span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">驳 回</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">修 改</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批确认后 出纳待确认 操作 -->
    <el-dialog title="提成记录">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程</span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">驳 回</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确认审批</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 已确认 3 已确认 5 所操作完成后查看的 -->
    <el-dialog title="提成记录" :visible="serivceCompleteVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程</span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="serivceCompleteVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getLabels } from '../api/label'
import { mapState } from 'vuex'
import { Message } from 'element-ui'
// import { Message } from 'element-ui'

export default {
  metaInfo: {
    title: '代帐报表'
  },
  data () {
    return {
      dialogFormVisible: false,
      radio: 3,
      activeTabName: 'all',
      getAccountsForm: {
        type: '',
        limit: 10,
        page: 1,
        year: 2020
      },
      accountLabels: [],
      serivceCompleteVisible: false,
      submitReceiveViewVisible: false,
      submitReceiveEditVisible: false,
      oneZeroEditVisible: false,
      oneZeroViewVisible: false,
      oneZeroVisible: false,
      firstYiqueren: false
    }
  },
  methods: {
    getRoleByFromLables () {
    },
    isDepartment () {
      return this.accountLabels.filter(({ label }) => label === '部门相关').length > 0
    },
    isBusiness (label) {
      return this.accountLabels.filter(({ label }) => label === '业务待审').length > 0
    },
    isFinance (label) {
      return this.accountLabels.filter(({ label }) => label === '财务待审').length > 0
    },
    isCashier (label) {
      return this.accountLabels.filter(({ label }) => label === '出纳待审').length > 0
    },
    // 判断是否可以编辑
    isCanEdit (customer) {
      const { collectStatusValue, royaltyStatusValue } = customer
      const label = this.getAccountsForm.type
      // 未申请可以提交申请
      if (label === 'business:account:list:dept') {
        if (collectStatusValue === '0') {
          return false
        }
        if (collectStatusValue === '1') {
          return true
        }
      }
      if (label === 'business:account:list:create' || label === 'business:account:list:all') {
        if (collectStatusValue === '0') {
          return true
        }
        if (collectStatusValue === '1') {
          return false
        }
      }
      // 以驳回不能修改
      if (collectStatusValue === '2') {
        return false
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        return true
      }
    },
    // 判断是否可以查看
    isCanView (customer) {
      const label = this.getAccountsForm.type
      const { collectStatusValue } = customer
      // 未申请不能查看
      if (collectStatusValue === '0') {
        return false
      }
      if (label === 'business:account:list:create' || label === 'business:account:list:all') {
        // 待确认 可以查看
        if (collectStatusValue === '1') {
          return true
        }
      }
      if (label === 'business:account:list:dept') {
        // 待确认 可以查看
        if (collectStatusValue === '1') {
          return false
        }
      }
      // 以驳回和已确认可以查看
      if (collectStatusValue === '2' || collectStatusValue === '3') {
        return true
      }
    },
    getAccounts () {
      this.$store.dispatch('getAccounts', this.getAccountsForm)
    },
    getAccountLabels () {
      getLabels('account').then(({ data: accountLabels }) => {
        this.accountLabels = accountLabels.map(accountLabel => {
          const name = Object.keys(accountLabel)[0]
          const label = accountLabel[name]
          return {
            label,
            name
          }
        })
        this.getAccountsForm.type = this.accountLabels[0].name
        this.getRoleByFromLables()
      })
    },
    getAccountForTable (month, row) {
      return row.accountList.filter(account => new Date(account.currentMonth).getMonth() + 1 === month)[0] || null
    },
    getCompleteCircleClass (month, row) {
      const account = this.getAccountForTable(month, row)
      if (account === null) {
        return 'info'
      }
      return account.statusName === '已发提成' ? 'red' : 'green'
    },
    handleCurrentChangeClick (currentPage) {
      this.getAccountsForm.page = currentPage
      this.getAccounts()
    },
    handelTabClick () {
      this.getAccountsForm.page = 1
      this.getAccounts()
    },
    handleDealServiceCommand (commandWithCustomerId) {
      if (commandWithCustomerId.startsWith('edit')) {
        const customerId = Number.parseInt(commandWithCustomerId.replace('edit', ''))
        const customer = this.getCustomer(customerId)
        this.handleEditCommandClick(customer)
      } else {
        const customerId = Number.parseInt(commandWithCustomerId.replace('view', ''))
        const customer = this.getCustomer(customerId)
        this.handleViewCommandClick(customer)
      }
    },
    getCustomer (id) {
      return this.accounts.list.filter(({ customerId }) => customerId === id)[0]
    },
    handleEditCommandClick (customer) {
      const label = this.getAccountsForm.type
      const { collectStatusValue, royaltyStatusValue } = customer
      // 我提交的
      if (label === 'business:account:list:create' || label === 'business:account:list:all') {
        // 未申请
        if (collectStatusValue === '0' || collectStatusValue === null) {
          this.submitReceiveEditVisible = true
        }
        // 待确认弹出
        if (collectStatusValue === '1') {
          this.submitReceiveViewVisible = true
        }
        // 已驳回
        if (collectStatusValue === '2') {
        }
        // 已确认
        if (collectStatusValue === '3' && royaltyStatusValue === '0') {
          alert('第二个·提交')
        }
      }
      // 部门相关
      if (label === 'business:account:list:dept') {
        // 未申请
        if (collectStatusValue === '0' || collectStatusValue === null) {
          Message({
            message: '未申请不能查看',
            type: 'warning'
          })
        }
        // 待确认弹出
        if (collectStatusValue === '1') {
          this.oneZeroVisible = true
        }
        // 已驳回
        if (collectStatusValue === '2') {
          this.oneZeroEditVisible = true
        }
        // 已确认
        if (collectStatusValue === '3') {
          this.submitReceiveViewVisible = true
        }
      }
      // // 未申请 未申请
      // if ((collectStatusValue === '0' || collectStatusValue === null) && (royaltyStatusValue === '0' || royaltyStatusValue === null)) {
      //   this.submitReceiveEditVisible = true
      // }
      // // 待确认 未申请
      // if (collectStatusValue === '1' && royaltyStatusValue === '0') {
      //   this.oneZeroEditVisible = true
      // }
      // // 已确认 已确认
      // if (collectStatusValue === '3' && royaltyStatusValue === '5') {
      //   Message({
      //     message: '提成已发放不可修改',
      //     type: 'warning'
      //   })
      // }
    },
    handleViewCommandClick (customer) {
      const label = this.getAccountsForm.type
      const { collectStatusValue } = customer
      // 我提交的
      if (label === 'business:account:list:create' || label === 'business:account:list:all') {
        // 未申请
        if (collectStatusValue === '0' || collectStatusValue === null) {
          Message({
            message: '未申请不能查看',
            type: 'warning'
          })
        }
        // 待确认弹出
        if (collectStatusValue === '1') {
          this.submitReceiveViewVisible = true
        }
        // 已驳回
        if (collectStatusValue === '2') {
          this.oneZeroEditVisible = true
        }
        // 已确认
        if (collectStatusValue === '3') {
          this.firstYiqueren = true
        }
      }
      // 部门相关
      if (label === 'business:account:list:dept') {
        // 未申请
        if (collectStatusValue === '0' || collectStatusValue === null) {
          Message({
            message: '未申请不能查看',
            type: 'warning'
          })
        }
        // 待确认弹出
        if (collectStatusValue === '1') {
          this.oneZeroVisible = true
        }
        if (collectStatusValue === '2') {
          this.oneZeroEditVisible = true
        }
        // 已确认
        if (collectStatusValue === '3') {
          this.firstYiqueren = true
        }
      }
      // // 未申请 未申请
      // if ((collectStatusValue === '0' || collectStatusValue === null) && (royaltyStatusValue === '0' || royaltyStatusValue === null)) {
      //   this.submitReceiveViewVisible = true
      // }
      // // 待确认 未申请
      // if (collectStatusValue === '1' && royaltyStatusValue === '0') {
      //   this.oneZeroViewVisible = true
      // }
      // // 待确认 未申请
      // if (collectStatusValue === '1' && royaltyStatusValue === '0') {
      //   this.oneZeroViewVisible = true
      // }
      // // 已确认 已确认
      // if (collectStatusValue === '3' && royaltyStatusValue === '5') {
      //   this.serivceCompleteVisible = true
      // }
    }
    // // 当判断未收款的时候弹出用例1
    // isReceiveMoney (collectStatusValue) {
    //   const receiveSattu = this.getAccountsForm.list.collectStatusValue
    //   if ( receiveSattu === 1 ) {
    //     return dialogFormVisible = ture
    //   }
    // },
    // // 当以收款的时候弹出用例2来当状态待发提成
    // isCommission (royaltyStatusValue) {
    //   const commissionStatu = this.getAccountsForm.list.royaltyStatusValue
    //   if ( commissionStatu === 1 ) {
    //     return commissionVisible = ture
    //   }
    // },
    // // 当前是已确认发提成待审批状态
    // isApproval () {
    //   const approval = this.getAccountsForm.list
    //   if ( approval === 3 ) {
    //     return approval = ture
    //   }
    // }
    // 用来展示操作选项
  },
  mounted () {
    this.getAccountLabels()
    this.getAccounts()
  },
  computed: {
    ...mapState({
      accounts: state => state.account.accounts
    })
  }
}
</script>

<style lang="scss">
.agent-report{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.agent-header-custom{
  width: 100%;
}
.agent-table-show{
  margin-top: 20px;
}
.agent-report-tabs .el-tabs__content {
  padding: none;
}
.none-border {
  border-right: 0px solid #EBEEF5 !important;
}

.green {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#67C23A;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.blue {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#409EFF;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.red {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:red;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.warn {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#E6A23C;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.info {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#fff;
  margin: 2px 5px 0 0px;
  display: inline-block;
  border:1px solid rgb(232, 232, 232);
}
</style>
