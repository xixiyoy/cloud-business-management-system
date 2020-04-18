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
    <el-dialog title="提交收款" :visible.sync="zeroZeroEditVisible">
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
        <el-button type="primary" @click="zeroZeroEditVisible = false">确 定</el-button>
        <el-button @click="zeroZeroEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 提交收款后修改-->
    <el-dialog title="收款记录" :visible.sync="oneZeroSelfEditVisible">
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
        <el-button type="primary" @click="oneZeroSelfEditVisible = false">修 改</el-button>
        <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款待审核后 -->
    <el-dialog title="收款详情" :visible="oneZeroOtherEditVisible">
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
        <el-button @click="oneZeroOtherEditVisible = false">驳 回</el-button>
        <el-button @click="oneZeroOtherEditVisible = false">确认收款</el-button>
        <el-button @click="oneZeroOtherEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 驳回后展示-->
    <el-dialog title="收款记录" :visible.sync="twoZeroViewVisible">
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
        <el-button @click="twoZeroViewVisible = false">取 消</el-button>
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
    <!-- 提交收款确认后提交提成操作 -->
    <el-dialog title="提交提成" :visible="threeZeroEditVisible">
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
        <el-button type="primary" @click="threeZeroEditVisible = false">确 定</el-button>
        <el-button @click="threeZeroEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批操作1 -->
    <el-dialog title="提交提成" :visible="treeOneEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>待业务审批</span>
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
          <span>审批流程:
            <div style="width:80%;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                        <i class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>提交人</p>
                        <p>提交时间</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt=""><br>
                        </div>
                        <p>提交人</p>
                        <p>提交时间</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                        <i class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>提交人</p>
                        <p>提交时间</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                        <i class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>提交人</p>
                        <p>提交时间</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">修 改</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 3 4 驳回后查看 -->
    <el-dialog title="收款详情" :visible="treeFourViewVisible">
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
            <el-form-item label="收款月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="treeFourViewVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批操作3 -->
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
    <!-- 提交收款确认后提交提成审批操作4 -->
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
    <el-dialog title="提成记录" :visible="treeFiveViewVisible">
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
        <el-button @click="treeFiveViewVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getLabels } from '../api/label'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '代帐报表'
  },
  data () {
    return {
      innerVisible: false,
      // 以上是今天的代码
      zeroZeroEditVisible: false,
      oneZeroSelfEditVisible: false,
      oneZeroOtherEditVisible: false,
      twoZeroViewVisible: false,
      threeZeroEditVisible: false,
      treeFiveViewVisible: false,
      treeFourViewVisible: false,
      treeOneEditVisible: false,
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
    isSelf () {
      return true
    },
    // 判断是否可以编辑
    isCanEdit (customer) {
      const { collectStatusValue, royaltyStatusValue } = customer
      // 未申请 未申请 所有人都可以编辑
      if (collectStatusValue === '0') {
        return true
      }
      if (collectStatusValue === '1') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '1') {
        return true
      }
    },
    // 判断是否可以查看
    isCanView (customer) {
      // const { collectStatusValue } = customer
      const { collectStatusValue, royaltyStatusValue } = customer
      if (collectStatusValue === '2') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '5') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '4') {
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
      const { collectStatusValue, royaltyStatusValue } = customer
      if (collectStatusValue === '0') {
        this.zeroZeroEditVisible = true
      }
      if (collectStatusValue === '1') {
        this.treeOneEditVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        this.threeZeroEditVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '1') {
        this.treeOneEditVisible = true
      }
    },
    handleViewCommandClick (customer) {
      const { collectStatusValue, royaltyStatusValue } = customer
      if (collectStatusValue === '2') {
        this.twoZeroViewVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        alert('3 0 查看')
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '4') {
        this.treeFourViewVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '5') {
        this.treeFiveViewVisible = true
      }
    }
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
// 提成流程展示部分
.approval-one{
  width: 27%;
  text-align: center;
  display: inline-block;
  }
.approval-two{
  width: 27%;
  text-align: center;
  display: inline-block;
  margin-left: -25px;
  }
.approval-three{
  width: 27%;
  text-align: center;
  display: inline-block;
  margin-left: -26px;
  }
.approval-four{
  width: 27%;
  text-align: center;
  display: inline-block;
  margin-left: -26px;
  }
.time-line-process{
    width: 100px;
    height: 1px;
    background-color: #606266;
    float: left;
    margin: 31px 0 0 -18px;
}
.approval-content{
    float: left;
}
/* 等待的图标 */
.wait-statu{
  width: 14px;
  height: 14px;
}
/* 完成的图标 */
.approval{
  display: block;
}
</style>
